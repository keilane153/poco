class ReAddStatusToArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :status, :string
  end
end
