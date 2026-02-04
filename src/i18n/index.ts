import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "app.title": "Project Tracker",
            "app.subtitle": "A premium hub showcasing my ecosystem of web applications, AI experiments, and front-end architectures.",
            "app.explore": "Project",
            "common.install": "Install App",
            "common.copy_link": "Copy Link",
            "common.link_copied": "Link copied to clipboard!",
            "app.masterpieces": "Repository",
            "app.hero_text": "An evolving repository of modern web projects, crafted with precision across various frameworks and technologies.",
            "search.placeholder": "Search projects...",
            "filter.all_tech": "All Tech",
            "filter.all_assistance": "All Creators",
            "filter.tech": "Stack",
            "filter.assistance": "Creator",
            "sort.label": "Priority",
            "sort.name": "Name",
            "sort.techCount": "Complexity",
            "sort.descriptionLength": "Detail",
            "sort.az": "A-Z",
            "sort.za": "Z-A",
            "view.grid": "Grid View",
            "view.list": "List View",
            "view.compact": "Compact View",
            "analytics.title": "Repository Metrics",
            "analytics.intelligence": "Data Insights",
            "analytics.subtitle": "Quantifying development velocity, technology distribution, and architectural complexity.",
            "analytics.total_projects": "Projects",
            "analytics.total_artifacts": "Total Items",
            "analytics.tech_distribution": "Tech Stack Matrix",
            "analytics.top_assistance": "Collaboration Mix",
            "analytics.top_assistance_sub": "Distribution of development across various assistance models.",
            "analytics.core_stack": "Primary Stack",
            "analytics.core_stack_sub": "Core technologies powering this project ecosystem.",
            "analytics.layer_composition": "Architecture Breakdown",
            "analytics.layer_composition_sub": "Heatmap of frontend, backend, and integration layers.",
            "analytics.complexity_score": "Innovation Score",
            "analytics.complexity_score_sub": "Technical weight based on stack depth and implementation detail.",
            "analytics.top_tech": "Lead Tech",
            "analytics.ai_collab": "AI Synergy",
            "analytics.velocity": "Flow State",
            "analytics.velocity_value": "Optimal",
            "nav.home": "Projects",
            "nav.analytics": "Statistics",
            "common.loading": "Synchronizing...",
            "common.error": "System Crash.",
            "common.view_demo": "Live Preview",
            "common.source_code": "Source Code",
            "common.assistance": "Built with",
            "common.projects_found": "Projects Found",
            "common.explore_more": "View Details",
            "empty.title": "No Projects Match",
            "empty.subtitle": "Try adjusting your search or filters to find what you're looking for.",
            "empty.reset": "Clear Filters",
            "scroll_top": "Back to Top"
        }
    },
    vi: {
        translation: {
            "app.title": "Project Tracker",
            "app.subtitle": "Trung tâm lưu trữ hệ sinh thái các ứng dụng web, thử nghiệm AI và kiến trúc front-end của tôi.",
            "app.explore": "Dự án",
            "common.install": "Cài đặt",
            "common.copy_link": "Sao chép link",
            "common.link_copied": "Đã sao chép!",
            "app.masterpieces": "Kho lưu trữ",
            "app.hero_text": "Một kho lưu trữ các dự án web hiện đại đang phát triển, được chế tác tỉ mỉ trên nhiều framework và công nghệ khác nhau.",
            "search.placeholder": "Tìm kiếm dự án...",
            "filter.all_tech": "Tất cả công nghệ",
            "filter.all_assistance": "Tất cả người tạo",
            "filter.tech": "Công nghệ",
            "filter.assistance": "Người tạo",
            "sort.label": "Ưu tiên",
            "sort.name": "Tên",
            "sort.techCount": "Độ phức tạp",
            "sort.descriptionLength": "Chi tiết",
            "sort.az": "A-Z",
            "sort.za": "Z-A",
            "view.grid": "Lưới",
            "view.list": "Danh sách",
            "view.compact": "Thu gọn",
            "analytics.title": "Chỉ số Kho lưu trữ",
            "analytics.intelligence": "Phân tích dữ liệu",
            "analytics.subtitle": "Định lượng tốc độ phát triển, phân bổ công nghệ và độ phức tạp kiến trúc.",
            "analytics.total_projects": "Dự án",
            "analytics.total_artifacts": "Tổng vật phẩm",
            "analytics.tech_distribution": "Ma trận công nghệ",
            "analytics.top_assistance": "Sự kết hợp cộng tác",
            "analytics.top_assistance_sub": "Phân bổ phát triển trên các mô hình hỗ trợ khác nhau.",
            "analytics.core_stack": "Stack chính",
            "analytics.core_stack_sub": "Các công nghệ lõi vận hành hệ sinh thái dự án này.",
            "analytics.layer_composition": "Phân tích kiến trúc",
            "analytics.layer_composition_sub": "Bản đồ nhiệt về phân bổ frontend, backend và các lớp tích hợp.",
            "analytics.complexity_score": "Điểm đổi mới",
            "analytics.complexity_score_sub": "Trọng số kỹ thuật dựa trên độ sâu stack và chi tiết triển khai.",
            "analytics.top_tech": "Công nghệ dẫn đầu",
            "analytics.ai_collab": "Hiệp lực AI",
            "analytics.velocity": "Trạng thái luồng",
            "analytics.velocity_value": "Tối ưu",
            "nav.home": "Dự án",
            "nav.analytics": "Thống kê",
            "common.loading": "Đang đồng bộ...",
            "common.error": "Lỗi hệ thống.",
            "common.view_demo": "Xem demo",
            "common.source_code": "Mã nguồn",
            "common.assistance": "Xây dựng bởi",
            "common.projects_found": "Dự án được tìm thấy",
            "common.explore_more": "Xem chi tiết",
            "empty.title": "Không có dự án phù hợp",
            "empty.subtitle": "Hãy thử điều chỉnh tìm kiếm hoặc bộ lọc để tìm thấy thứ bạn cần.",
            "empty.reset": "Xóa bộ lọc",
            "scroll_top": "Lên đầu trang"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
