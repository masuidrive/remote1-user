class CategorySerializer < ActiveModel::Serializer
  attributes :uid, :label_en, :label_ja, :visible
  attribute :topics, if: -> { instance_options.has_key?(:with_topics) }
  
  def topics
    options = instance_options[:with_topics]
    options = {} unless options.is_a?(Hash)
    _topics = object.topics.order(:order_index)
    _topics = _topics.where(active: true) if options[:active] == true
    ActiveModel::Serializer::CollectionSerializer.new(_topics, options)
  end
end
