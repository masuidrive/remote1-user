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
      [
        name,
        val ? ActiveModel::Serializer::CollectionSerializer.new(val, options).as_json : nil
      ]
    end.to_h
  end
end
