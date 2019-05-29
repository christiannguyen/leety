module Api
  class SolutionsController < ApplicationController
    def index
      render :json => Solution.all
    end

    def show
    end

    def create
      solution = Solution.new(solutions_params)
      if solution.save
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

    def solutions_params
      params.permit(:code, :problem_id)
    end
  end
end
