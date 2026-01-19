import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "app.title": "MyLabs",
            "app.subtitle": "A premium gallery of high-performance web applications and digital experiments.",
            "app.explore": "Portfolio",
            "app.masterpieces": "Featured Works",
            "app.hero_text": "Architecting the future of the web through iterative experimentation, modern frameworks, and AI-driven precision.",
            "search.placeholder": "Filter through the ecosystem...",
            "filter.all_tech": "All Systems",
            "filter.all_assistance": "All Architects",
            "filter.tech": "Core Engine",
            "filter.assistance": "AI Synthesis",
            "sort.label": "System Priority",
            "sort.name": "Identity",
            "sort.techCount": "Module Density",
            "sort.descriptionLength": "Structural Depth",
            "sort.az": "A-Z Index",
            "sort.za": "Z-A Index",
            "view.grid": "Grid",
            "view.list": "List",
            "view.compact": "Atomic",
            "analytics.title": "System Metrics",
            "analytics.intelligence": "Neural Insights",
            "analytics.subtitle": "A quantitative analysis of repository architecture, stack distributions, and development velocity.",
            "analytics.total_projects": "Active Nodes",
            "analytics.total_artifacts": "Total Assets",
            "analytics.tech_distribution": "Technology Matrix",
            "analytics.top_assistance": "AI Integration Depth",
            "analytics.top_assistance_sub": "Distribution of development cycles augmented by advanced neural models.",
            "analytics.core_stack": "Primary Tech Layer",
            "analytics.core_stack_sub": "Core technologies driving the architectural foundation of the portfolio.",
            "analytics.layer_composition": "Structural composition",
            "analytics.layer_composition_sub": "Heatmap of frontend, backend, and infrastructure distribution.",
            "analytics.complexity_score": "Innovation Index",
            "analytics.complexity_score_sub": "Technical complexity score based on dependency depth and stack variety.",
            "analytics.top_tech": "Prime Stack",
            "analytics.ai_collab": "Hybrid Dev",
            "analytics.velocity": "Deployment Flow",
            "analytics.velocity_value": "Optimal",
            "nav.home": "Showcase",
            "nav.analytics": "Insights",
            "common.loading": "Synchronizing Data...",
            "common.error": "System Interrupt Detected.",
            "common.view_demo": "Watch Demo",
            "common.source_code": "System Code",
            "common.assistance": "Engineered with",
            "common.projects_found": "Nodes Identified",
            "common.explore_more": "Initialize Exploration",
            "empty.title": "No Nodes Detected",
            "empty.subtitle": "Adjust system filters to locate hidden repositories.",
            "empty.reset": "Reset System",
            "scroll_top": "Return to Apex"
        }
    },
    vi: {
        translation: {
            "app.title": "MyLabs",
            "app.subtitle": "Thư viện cao cấp cho các ứng dụng web và thử nghiệm kỹ thuật số xuất sắc.",
            "app.explore": "Sưu tập",
            "app.masterpieces": "Công trình Tiêu biểu",
            "app.hero_text": "Kiến tạo tương lai của web thông qua các thử nghiệm lặp lại, framework hiện đại và độ chính xác của AI.",
            "search.placeholder": "Lọc qua hệ sinh thái...",
            "filter.all_tech": "Tất cả Hệ thống",
            "filter.all_assistance": "Tất cả Kiến trúc sư",
            "filter.tech": "Công nghệ Lõi",
            "filter.assistance": "Tổng hợp AI",
            "sort.label": "Mức ưu tiên",
            "sort.name": "Định danh",
            "sort.techCount": "Mật độ Module",
            "sort.descriptionLength": "Độ sâu Cấu trúc",
            "sort.az": "Chỉ mục A-Z",
            "sort.za": "Chỉ mục Z-A",
            "view.grid": "Lưới",
            "view.list": "Danh sách",
            "view.compact": "Nguyên tử",
            "analytics.title": "Chỉ số Hệ thống",
            "analytics.intelligence": "Phân tích Thông minh",
            "analytics.subtitle": "Phân tích định lượng về kiến trúc repository, phân bổ ngăn xếp và tốc độ phát triển.",
            "analytics.total_projects": "Nút Hoạt động",
            "analytics.total_artifacts": "Tổng Tài sản",
            "analytics.tech_distribution": "Ma trận Công nghệ",
            "analytics.top_assistance": "Độ sâu Tích hợp AI",
            "analytics.top_assistance_sub": "Phân bổ các chu kỳ phát triển được tăng cường bởi các mô hình thần kinh tiên tiến.",
            "analytics.core_stack": "Lớp Công nghệ Chính",
            "analytics.core_stack_sub": "Các công nghệ cốt lõi thúc đẩy nền tảng kiến trúc của danh mục.",
            "analytics.layer_composition": "Thành phần Cấu trúc",
            "analytics.layer_composition_sub": "Bản đồ nhiệt về phân bổ frontend, backend và hạ tầng.",
            "analytics.complexity_score": "Chỉ số Đổi mới",
            "analytics.complexity_score_sub": "Điểm độ phức tạp kỹ thuật dựa trên độ sâu phụ thuộc và sự đa dạng của stack.",
            "analytics.top_tech": "Stack Chủ lực",
            "analytics.ai_collab": "Phát triển Lai",
            "analytics.velocity": "Luồng Triển khai",
            "analytics.velocity_value": "Tối ưu",
            "nav.home": "Trưng bày",
            "nav.analytics": "Thông tin chi tiết",
            "common.loading": "Đang đồng bộ hóa dữ liệu...",
            "common.error": "Phát hiện ngắt quãng hệ thống.",
            "common.view_demo": "Xem Demo",
            "common.source_code": "Mã nguồn Hệ thống",
            "common.assistance": "Được thiết lập bởi",
            "common.projects_found": "Nút đã xác định",
            "common.explore_more": "Bắt đầu khám phá",
            "empty.title": "Không tìm thấy Nút nào",
            "empty.subtitle": "Điều chỉnh bộ lọc hệ thống để tìm các repository ẩn.",
            "empty.reset": "Đặt lại Hệ thống",
            "scroll_top": "Về đỉnh hệ thống"
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
