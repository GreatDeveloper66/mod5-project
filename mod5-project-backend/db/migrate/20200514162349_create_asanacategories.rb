class CreateAsanacategories < ActiveRecord::Migration[6.0]
  def change
    create_table :asanacategories do |t|
      t.integer :asana_id
      t.integer :category_id

      t.timestamps
    end
  end
end
