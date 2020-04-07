# then re-define
namespace 'cljs' do
  desc 'compile cljs app'
  task 'compile' do
    Dir.chdir('client/acme-app') do
      sh('npx shadow-cljs release frontend')
    end
  end

  desc 'watch cljs app'
  task 'watch' do
    Dir.chdir('client/acme-app') do
      sh('npx shadow-cljs watch frontend')
    end
  end
end

Rake::Task['assets:precompile'].enhance do
  Rake::Task['cljs:compile'].invoke
end
