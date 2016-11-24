module ApplicationHelper
  def react_props(*args)
    name = nil
    options = Hash[*
      args
      .map { |v| v.is_a?(Hash) ? v.to_a : [v, nil]}
      .flatten
      .map.with_index do |val, idx|
        if idx % 2 == 0
          name = val.to_s
        else
          records = instance_variable_get("@#{name}")
          if records
            ActiveModel::Serializer::CollectionSerializer.new(
              records,
              val
            ).to_json
          else
            nil
          end
        end
      end.compact
    ]
  end
end
