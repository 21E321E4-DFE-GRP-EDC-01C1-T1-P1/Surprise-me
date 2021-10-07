const mongoose = require("mongoose");

const Event = mongoose.Schema(
  {
    nome: { type: String },
    criador: { type: String},
    endereco: { type: String},
    status: { type: String },
    ponto: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("event", Event);
