(ns acme.frontend.app
  (:require [reagent.core :as r]))

(defn app []
  [:div
   [:h1 "Hello " js/gon.username]])

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting...")
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))

