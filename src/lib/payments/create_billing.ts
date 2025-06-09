export default async function create_billing() {
    const NEXT_PUBLIC_API_STAGING_URL = process.env.NEXT_PUBLIC_API_STAGING_URL;

    const jwtToken = localStorage.getItem('jwtToken')
    if (!jwtToken){
        return;
    }

    const headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${jwtToken}`)

    const response = await fetch(`${NEXT_PUBLIC_API_STAGING_URL}/payments/create-billing`, {
        method: "POST",
        headers: headers,
    })

    const result = await response.json();

    if (response.status == 201){
        return result.billing_url;
    }else {
        return result.detail
    }
}   