class ChangeAsanas < ActiveRecord::Migration[6.0]
  def change
    rename_column :asanas, :name, :englishname
    add_column :asanas, :sanskritname, :string
  end
end
