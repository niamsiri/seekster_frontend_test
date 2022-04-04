import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const swalConfirm = (title, text) => {
    return MySwal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
    })
}

export const swalNoti = (title, text, status) => {
    return MySwal.fire({
        title: title,
        text: text,
        icon: status ? status : 'success',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'ตกลง',
    })
}

export const swalDeleteConfirm = () => {
    return MySwal.fire({
        title: 'คุณต้องการลบหรือไม่?',
        text: "หากกดตกลงข้อมูลจะถูกลบและไม่สามารถกู้คืนได้อีก!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
    })
}