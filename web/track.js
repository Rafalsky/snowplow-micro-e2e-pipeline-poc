// Import and initialize Snowplow Analytics tracker
;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[]; p.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments) };p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1; n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","","snowplow"));

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