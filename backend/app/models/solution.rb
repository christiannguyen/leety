class Solution < ApplicationRecord
  has_many :notes
  belongs_to :problem
end
