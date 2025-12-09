
//Implement the tracker
window.snowplow('newTracker', 'sp', 'micro.localhost', {
  appId: 'rafalsky-motors',
  platform: 'web'
});

window.snowplow('enableActivityTracking', {
  minimumVisitLength: 30,
  heartbeatDelay: 10
});

// Track page views
window.snowplow('trackPageView');

// Example of tracking a custom event
window.snowplow('trackStructEvent', 'category', 'action', 'label', 'property', 'value');


//react spa pageview
(function() {
  // Keep reference to the original functions
  const pushState = history.pushState;
  const replaceState = history.replaceState;

  function track() {
    if (window.snowplow) {
      window.snowplow('trackPageView');
    }
  }

  // Patch pushState
  history.pushState = function(state, title, url) {
    const result = pushState.apply(this, arguments);
    track();
    return result;
  };

  // Patch replaceState
  history.replaceState = function(state, title, url) {
    const result = replaceState.apply(this, arguments);
    track();
    return result;
  };

  // Back/forward button
  window.addEventListener('popstate', track);

  // First load already tracked manually
})();
