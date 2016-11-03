module AutoGenerateUid                                                                                                       
  extend ActiveSupport::Concern

  included do
    before_validation :generate_uid,
      on: :create,
      if: :has_uid_column?

    validates :uid,
      presence: true,
      uniqueness: { case_sensitive: false },
      if: :has_uid_column?
  end

  def to_param
    has_uid_column? ? self.uid : super 
  end

  private

  def generate_uid
    self.uid ||= SecureRandom.urlsafe_base64
  end

  def has_uid_column?
    self.class.columns.any? { |c| c.name == 'uid' }
  end                                                                                                                  
end                                                                                                                          
 