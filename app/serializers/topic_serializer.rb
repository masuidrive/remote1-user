class TopicSerializer < ActiveModel::Serializer
  attributes :uid, :body, :category_uid
  attribute :category, if: -> { instance_options.has_key?(:with_category) }

  def category_uid
    object.category.uid
  end

  def category
    options = instance_options[:with_category]
    options = {} unless options.is_a?(Hash)
    ActiveModelSerializers::SerializableResource.new(object.category, options)
  end
end
