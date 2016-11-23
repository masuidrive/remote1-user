class PublicCategorySerializer < ActiveModel::Serializer
  attributes :uid, :label_en, :label_ja, :topics
  def topics
    ActiveModel::Serializer::CollectionSerializer.new(
      object.topics.where(active: true).order(:order_index),
      serializer: PublicTopicSerializer
    )
  end
end
