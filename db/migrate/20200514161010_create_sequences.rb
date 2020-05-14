class CreateSequences < ActiveRecord::Migration[6.0]
  def change
    create_table :sequences do |t|
      t.string :name
      t.integer :duration
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
