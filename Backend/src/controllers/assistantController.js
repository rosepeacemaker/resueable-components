import Chat from  "../models/chat.js";



export const chatWithAssistant = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Please provide a message.",
      });
    }

    const newChat = await Chat.create({
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    res.status(201).json({
      success: true,
      message: "Message saved successfully!",
      chat: newChat,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};