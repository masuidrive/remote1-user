class Topic < ApplicationRecord
  belongs_to :category
  has_many :essays, dependent: :destroy
  scope :order_by_index, -> { order(:order_index) }
end
