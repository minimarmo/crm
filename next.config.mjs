/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/crm", // แทนที่ <REPO_NAME> ด้วยชื่อ repository ของคุณ
  assetPrefix: "/crm/", // ทำให้สามารถเรียก asset ได้จาก basePath
  reactStrictMode: true,
  output: "export", // ใช้สำหรับการ export static HTML
};

export default nextConfig;
