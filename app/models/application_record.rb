class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
  include AutoGenerateUid

  class << self
    def exists?(params)
      self.where(params).count > 0
    end
  end

end
