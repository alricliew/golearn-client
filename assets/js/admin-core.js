// Function to show notification
func = {
  showNotification: function(from, align, type, material_icon, message) {
    // type = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];
    // color = Math.floor((Math.random() * 6) + 1);
    $.notify({
      icon: material_icon,
      message: message

    }, {
      type: type,
      timer: 3000,
      placement: {
        from: from,
        align: align
      }
    });
  },
}