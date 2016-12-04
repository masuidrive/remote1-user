class Category < ApplicationRecord
  has_many :topics, dependent: :destroy
  has_many :essays, through: :topics
  scope :order_by_index, -> { order(:order_index) }
  scope :visible, -> { where(visible: true) }
  scope :invisible, -> { where(visible: false) }

  def post_essay(user, topic, body)
    essay = self.essays.find_or_create_by(user_id: user.id)
    essay.update topic_id: topic.id, body: body, selected: true
  end
end
