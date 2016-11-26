class EssaySerializer < ActiveModel::Serializer
  attributes :uid, :body, :created_at, :updated_at
  attribute :topic, if: -> { instance_options.has_key?(:with_topic) }

  def topic
    options = instance_options[:with_topic]
    options = {} unless options.is_a?(Hash)
    ActiveModelSerializers::SerializableResource.new(object.topic, options)
  end
end
