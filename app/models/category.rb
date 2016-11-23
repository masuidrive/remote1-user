class Category < ApplicationRecord
  has_many :topics, dependent: :destroy
  scope :order_by_index, -> { order(:order_index) }
  scope :visible, -> { where(visible: true) }
  scope :invisible, -> { where(visible: false) }
end
