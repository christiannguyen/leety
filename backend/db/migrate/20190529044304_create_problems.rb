class CreateProblems < ActiveRecord::Migration[5.1]
  def change
    create_table :problems do |t|
      t.string :link
      t.string :difficulty

      t.timestamps
    end
  end
end
