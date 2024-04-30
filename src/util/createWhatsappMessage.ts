import 'dotenv/config';
export type Message = {
  number: string;
  textMessage: {
    text: string;
  };
};

export async function submitMessageWhatsapp(payload: Message): Promise<void> {
  try {
    const { WHATSAPP_API_URL, WHATSAPP_INSTANCE, WHATSAPP_API_TOKEN } =
      process.env;

    const whatsappUrl = `${WHATSAPP_API_URL}/message/sendText/${WHATSAPP_INSTANCE}`;

    await fetch(whatsappUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: WHATSAPP_API_TOKEN!,
      },
      body: JSON.stringify(payload),
    });

    return;
  } catch (error) {
    console.error(error);
  }
}
