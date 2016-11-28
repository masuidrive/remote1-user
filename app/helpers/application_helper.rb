module ApplicationHelper

  # react_props(
  #   essays: {},
  #   categories: { serializer: PublicCategorySerializer }
  # )
  def react_props(*args)
    args
    .map { |v| v.is_a?(Hash) ? v.to_a : [v, nil]}
    .flatten.each_slice(2)
    .map do |(name, options)|
      val = instance_variable_get("@#{name}")
      json = nil
      if val.is_a?(ActiveRecord::Base)
        json = ActiveModelSerializers::SerializableResource.new(val, options).as_json
      else
        json = ActiveModel::Serializer::CollectionSerializer.new(val, options).as_json
      end
      [ name, json ]
    end.to_h
  end
end
