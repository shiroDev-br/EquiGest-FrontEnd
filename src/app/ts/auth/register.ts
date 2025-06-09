export async function register_user() {
    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;

    const username = document.getElementById('username') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;

    const taxID = document.getElementById('taxID') as HTMLInputElement;
    const cellPhone = document.getElementById('cellPhone') as HTMLInputElement;

    const password = document.getElementById('password') as HTMLInputElement;

    const body = {
      username: username.value,
      password: password.value,
      email: email.value,
      cellphone: cellPhone.value,
      cpf_cnpj: taxID.value,
    };

    const body_encoded = JSON.stringify(body);

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const response = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/register`, {
      method: "POST",
      headers: headers,
      body: body_encoded,
    });

    const result = await response.json();

    if (response.status == 201){
        localStorage.setItem('jwtToken', result.access_token);
    }else {
      console.log(result.detail);
    }
}