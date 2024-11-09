class Article < ApplicationRecord
  include Visible
  belongs_to :admin
  has_many :comments, dependent: :destroy

  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 6 }
end
