class User < ApplicationRecord
  include AutoGenerateUid
  before_validation :generate_salt
  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :password_salt, presence: true

  def password=(str)
    self.password_digest = digest(str)
  end

  def authorize(password)
    self.active? && digest(password) == password_digest
  end

  def generate_salt
    self.password_salt ||= SecureRandom.hex(32)
  end

  private
  def digest(str)
    generate_salt
    Digest::SHA256.hexdigest("#{str}#{self.password_salt}")
  end
end
