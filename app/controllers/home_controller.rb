class HomeController < ApplicationController
  def index
    gon.username = "ynon"
  end
end
