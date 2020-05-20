class CreateAsanasequences < ActiveRecord::Migration[6.0]
  def change
    create_table :asanasequences do |t|
      t.integer :asana_id
      t.integer :sequence_id

      t.timestamps
    end
  end
end
