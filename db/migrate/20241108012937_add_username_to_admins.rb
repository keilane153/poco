class AddUsernameToAdmins < ActiveRecord::Migration[8.0]
  def change
    add_column :admins, :username, :string
  end
end
