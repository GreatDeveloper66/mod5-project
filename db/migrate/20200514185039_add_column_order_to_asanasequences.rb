class AddColumnOrderToAsanasequences < ActiveRecord::Migration[6.0]
  def change
    add_column :asanasequences, :order, :integer
  end
end
