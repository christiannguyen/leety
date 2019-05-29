module Api
  class ProblemsController < ApplicationController
    def index
      render :json => Problem.all
    end

    def show
    end

    def create
      problem = Problem.new(problems_params)

      if problem.save
        render :json => {}, :status => :created
      else
        render :json => {}, :status => :unprocessable_entity
      end
    end

    def delete
    end

    def update
    end

    private

    def problems_params
      params.permit(:link, :difficulty)
    end
  end
end
