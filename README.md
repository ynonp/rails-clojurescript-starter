# Rails / ClojureScript Starter Template

Note: this template is work in progress. Many things probably don't work as expected.

A simple minimalistic starter template for a Rails server side app with a ClojureScript/Reagent client.

What's Inside:

1. Rake task `cljs:compile` to compile clojure app to production

2. Modified `assets:precompile` to include `cljs:compile`

3. Rake task `cljs:watch` to start watching clojurescript app for changes

4. A helper `cljs_module_tag` to insert a ClojureScript module (based on its name in the cljs manifest)

5. ClojureScript/Reagent app using shadow-cljs

