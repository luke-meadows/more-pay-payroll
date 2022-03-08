import emailjs from '@emailjs/browser';
export function handleSubmit(e, inputs, clearForm, setSending) {
  e.preventDefault();
  setSending(true);
  emailjs
    .send(
      'service_ovrsdif',
      'template_q403hfo',
      inputs,
      'user_tUEeIDH4Mdq7YlVipFLGr'
    )
    .then(
      (response) => {
        clearForm();
        console.log('success');
        setSending(false);
      },
      (err) => {
        console.log('FAILED...', err);
        setSending(false);
      }
    );
}
