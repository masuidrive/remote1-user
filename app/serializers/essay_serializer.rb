class EssaySerializer < ActiveModel::Serializer
  attributes :uid, :body, :created_at, :updated_at
end
