const {
  InformasiListrik,
  PerangkatListrik,
} = require('../models');

const library = {}
module.exports = library

library.create = async ({
  body = {},
  transaction = null
}) => {
  const informasiListrik = {
    daya: body.daya,
    jenis_pembayaran: body.jenis_pembayaran,
    user_id: body.user_id
  }
  const informasiListrikCreated = await InformasiListrik.create(informasiListrik, {
    transaction
  })

  const perangkatListriks = body.perangkat_listrik.map(perangkatListrik => {
    return {
      jenis_perangkat: perangkatListrik.jenis_perangkat,
      jenis_inverter: perangkatListrik.jenis_inverter,
      jumlah: perangkatListrik.jumlah,
      daya_listrik: perangkatListrik.daya_listrik,
      lama_pemakaian: perangkatListrik.lama_pemakaian,
      user_id: informasiListrik.user_id
    }
  })

  const perangkatListrikCreated = await PerangkatListrik.bulkCreate(perangkatListriks.map(perangkatListrik => ({
    ...perangkatListrik,
    informasi_listrik_id: informasiListrikCreated.id
  })), {
    transaction
  })

  return {
    informasiListrik: informasiListrikCreated,
    perangkatListrik: perangkatListrikCreated
  }
}

