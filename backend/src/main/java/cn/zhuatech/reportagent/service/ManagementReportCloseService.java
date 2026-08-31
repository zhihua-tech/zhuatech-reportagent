/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.reportagent.service;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ManagementReportCloseService {

    public CloseAssessment assess(CloseRequest request) {
        int reconciliationCoverage = request.sourceSystems() == 0
                ? 0
                : Math.min(100, request.reconciledSystems() * 100 / request.sourceSystems());
        List<String> blockers = new ArrayList<>();
        List<String> actions = new ArrayList<>();

        if (request.sourceSystems() == 0) {
            blockers.add("报告尚未登记数据源");
        } else if (request.reconciledSystems() < request.sourceSystems()) {
            blockers.add("数据源对账尚未全部完成");
        }
        if (!request.lineageComplete()) {
            blockers.add("指标血缘不完整");
        }
        if (request.variancesExplained() < request.materialVariances()) {
            blockers.add("重大差异尚未全部解释");
        }
        if (!request.ownerSignedOff()) {
            actions.add("等待报告责任人签署");
        }
        if (!request.periodLocked()) {
            actions.add("发布前锁定报告期间和指标快照");
        }

        Decision decision;
        if (!blockers.isEmpty()) {
            decision = Decision.BLOCKED;
        } else if (!actions.isEmpty()) {
            decision = Decision.REVIEW;
        } else {
            decision = Decision.PUBLISH;
        }
        return new CloseAssessment(request.reportId(), reconciliationCoverage,
                Math.max(0, request.materialVariances() - request.variancesExplained()), decision,
                List.copyOf(blockers), List.copyOf(actions));
    }

    public record CloseRequest(
            @NotBlank String reportId,
            @Min(0) int sourceSystems,
            @Min(0) int reconciledSystems,
            boolean lineageComplete,
            @Min(0) int materialVariances,
            @Min(0) int variancesExplained,
            boolean ownerSignedOff,
            boolean periodLocked) {
    }

    public record CloseAssessment(
            String reportId,
            int reconciliationCoverage,
            int unexplainedVariances,
            Decision decision,
            List<String> blockers,
            List<String> actions) {
    }

    public enum Decision { PUBLISH, REVIEW, BLOCKED }
}
