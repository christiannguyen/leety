class CreateSolutions < ActiveRecord::Migration[5.1]
  def change
    create_table :solutions do |t|
      t.string :code
      t.references :problem, foreign_key: true

      t.timestamps
    end
  end
end
