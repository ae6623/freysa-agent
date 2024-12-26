
/**
 * 获取消息数量
 */
export async function getMessagesCount(): Promise<number> {
  const messages = await getMessagesFromDatabase();
  return messages.length;
}

// 假设的数据库操作函数
async function getMessagesFromDatabase(): Promise<any[]> {
  // 模拟从数据库获取消息列表
  return [
    { id: 1, content: "Hello" },
    { id: 2, content: "World" },
    { id: 3, content: "How are you?" }
  ];
}
