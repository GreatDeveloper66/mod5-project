class CreateAsanas < ActiveRecord::Migration[6.0]
  def change
    create_table :asanas do |t|
      t.string :name
      t.string :picurl
      t.integer :duration

      t.timestamps
    end
  end
end
