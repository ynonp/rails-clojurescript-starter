module ApplicationHelper
  def cljs_module_tag(module_id)
    modules = []        
    File.open(Rails.root.join('public', 'javascripts', 'manifest.edn')) do |f|
      modules = EDN.read(f)
    end
    module_data = modules.find {|m| m[:'module-id'] == module_id }

    filename = module_data[:'output-name']
    javascript_include_tag filename, skip_pipeline: true
  rescue
    javascript_include_tag module_id, skip_pipeline: true
  end
end
