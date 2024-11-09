class AddAdminToArticles < ActiveRecord::Migration[8.0]
  def change
    add_reference :articles, :admin, foreign_key: true, null: false, default: 1
  end
end
