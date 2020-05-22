class AddCuesToAsanas < ActiveRecord::Migration[6.0]
  def change
    add_column :asanas, :cues, :string
  end
end
