class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :name, :username, :password_digest, :age
end
