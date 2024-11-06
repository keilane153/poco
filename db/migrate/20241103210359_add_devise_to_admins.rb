class AddDeviseToAdmins < ActiveRecord::Migration[8.0]
  def self.up
    change_table :admins do |t|
      # Nenhuma coluna nova é necessária, pois já existem todas.
    end

    # Adicione índices apenas se ainda não existirem
    add_index :admins, :email, unique: true unless index_exists?(:admins, :email)
    add_index :admins, :reset_password_token, unique: true unless index_exists?(:admins, :reset_password_token)
  end

  def self.down
    # Remova os índices
    remove_index :admins, :email if index_exists?(:admins, :email)
    remove_index :admins, :reset_password_token if index_exists?(:admins, :reset_password_token)
  end
end
