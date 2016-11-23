module ApplicationHelper
  def meta_json(*args)
    options = {}
    args.flatten.each do |argv|
      if argv.is_a?(Hash)
        options.update(argv)
      else
        options[argv.to_s] = {}
      end
    end

    content_for :meta_json, capture {
      options.each do |records_name, records_option|
        records = instance_variable_get("@#{records_name}")
        next unless records
        json = ActiveModel::Serializer::CollectionSerializer.new(
          records,
          records_option
        ).to_json
        concat tag('meta', name: "data-record-#{records_name}", content: json)
      end
    }
  end
end
